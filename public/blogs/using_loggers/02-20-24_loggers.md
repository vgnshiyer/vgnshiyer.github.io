---
title: Logging in Python like a pro.
subtitle: Debugging is overrated.
date: Feb 20, 2024
cover: /blogs/using_loggers/images/cover.png
tags:
  - software_development
  - software_engineering
  - Python
  - Debugging
  - Logging
---

**[TL;DR](#python-logger-on-steroids)**

### Why ?

Debugging is an integral part in the journey of a software engineer. According to this [research](https://www.researchgate.net/publication/345843594_Reversible_Debugging_Software_Quantify_the_time_and_cost_saved_using_reversible_debuggers) done in 2020, we spend around 50% of our time in debugging. Think about the amount of time and effort wasted in debugging the code we write. While adopting practices like, [Test Driven development(TDD)](https://en.wikipedia.org/wiki/Test-driven_development#:~:text=Test%20Driven%20Development%20(TDD)%20is,leading%20to%20more%20robust%20software.), [Code reviews](https://en.wikipedia.org/wiki/Code_review) or just in general writing simple readable code can help reduce the time and effort, writing useful and meaningful log messages is paramount.

### What should you log ?

A well-structured log message should be terse in terms of the information it tries to convey. What does that mean? It should not be too verbose, encapsulating a barrage of information confounding the programmar from what matters the most. At the same time, it should not be too frugal in what it tries to convey. It should have "just the right" amount of information.

Here is a nice checklist you can use to evaluate your log statements.

1. Timestamp: The date and time an event in the execution of a program occurred. This is an indespensible piece of information if you are working with distributed systems, to correlate events across different systems.

2. Log level: This piece of information captures the nature of an event. The usual ones are INFO, DEBUG, WARN, ERROR and FATAL.

3. Source: A lot of the time when you are working on a huge codebase with multiple modules and packages, it is often helpful to trace the sequence of execution of statements. 

4. Message: The message provides context to understand what was happening during the execution. Anywhere from two to three words are enough. Two words are enough for a developer to understand what's going on.

5. Contextual information: Any additional information like a request ID, a session ID or the current user that might be useful for understanding an event. This is very useful when you have a REST API and you want to debug an issue with a particular request. You can prefix every log statement with a unique request ID that nicely distiguishes it from other requests. There are a lot of ways you can play around with this.

6. Exception information: If the event is an error, include the exception type, the error message and the stack trace.

These points make sure you have all the necessary information for understanding a particular event in your log trace.

Here is an example of a well-structured log statement.

```
"2024-01-01T14:32:28Z" [ERROR] [requestId] Failed_connect {
  "source": "my-app:my-module:my-function",
  "context": {
    "user": "john.doe",
    "requestId": "123456",
  },
  "exceptionType" = "DatabaseException",
  "errorMessage": "Connection timed out",
  "stackTrace": "..."
}
```

### Python logger on steroids!

There are couple of ways you can achieve the above format for your logs. Usually that entails setting the formatting once in the form of an f-string, which will be used by the python logging module to encapsulate certain information. Other information can be encoded in the form of a json inside the log event. 

Here is how I set my loggers for most of my Python applications.

- I need the source of an event. (module/file name)
- I include the query_id for each log statement for a unique request to my API.
- I need to log additional context in the log event. (Depends on the log event)

The source file of the log event does not change as long as the control of execution is on that same file. So initializing once at the top of the file should do the job. As for the context, I need to consciously decide what I want to log while writing a log statement. 

Firstly, I set the basicConfig for the root logger.

```
# utils.py
def setup_logging(log_level, requestId):
  logging.basicConfig(
    format="%(asctime)s [%(levelname)s] %(requestId)s %(message)s"
    stream=sys.stdout,
    level=log_level,
    force=True,
  )

  old_factory = logging.getLogRecordFactory()

  def record_factory(*args, **kwargs):
    record = old_factory(*args, **kwargs)
    record.requestId = requestId
    return record

  logging.setLogRecordFactory(record_factory)

# main.py
requestId = str(uuid.uuid64())
utils.setup_logging("DEBUG", requestId=requestId)
```

This will be done once, in our entrypoint file (main.py).
(Different log levels can be set per module with the `setLevel()` method.)

The next thing to do is to get the name of the module which we can be extracted from the \__file\__ dunder attribute.

```
module = __file__

log_data = {
  'source': module,
}

# example log event
log_data['db_name'] = 'GameDB'
log_data['table_name'] = 'ScoreTable'
log_data['index_name'] = 'PlayerScoreIndex'
logger.debug("read_table" + json.dumps(log_data))
```
Sample log statement:
```
2024-02-20 14:30:15 [DEBUG] 123e4567-e89b-12d3-a456-426614174000 read_table
{
  "source": "main.py",
  "db_name": "GameDB",
  "table_name": "ScoreTable",
  "index_name": "PlayerScoreIndex"
}
```

This aligns with the desired log format. But it really becomes ugly as I add more logging statements to our modules. The following code encapsulates this into an object.

```
class LogEvent:
  def __init__(self, source: str):
    self.source = source

  def format(self, message: str, **kw):
    kw['source'] = self.source
    return f'{message} {json.dumps(kw)}'
```

Now I would have to just create an object of the LogEvent with the name of my module.

```
logger = logging.getLogger(__name__)
log_event = LogEvent(source=__file__)

logger.debug(log_event.format(db_name='GameDB', table_name='ScoreTable', index_name='PlayerScoreIndex'))
```

The code below is optional. It uses a MetaClass to autoconfigure the filename when an instance is created. It also makes sure that only one instance is created per module.

```
class Encoder(json.JSONEncoder):
  def default(self, o):
    if isinstance(o, set):
      return tuple(o)
    elif isinstance(o, str):
      return o.encode("unicode_escape").decode("ascii")
    elif isinstance(o, object):
      return o.__repr__()
    return super().default(o)
```
```
class LogEventMeta(type):
  _instances = {}

  def __call__(cls):
    source = os.path.basename(inspect.stack()[1].filename)

    # singleton - only one instance per file
    if source not in cls._instances:

        cls._instances[source] = super().__call__(source=source)
    return cls._instances[source]

class LogEvent(metaclass=LogEventMeta):
  def __init__(self, source: str):
    self.source = source

  def format(self, message: str, **kw):
    kw['source'] = self.source
    return f'{message} {json.dumps(kw, cls=Encoder, indent=2)}'
```

The Encoder class will be used to encode certain types of objects. This is useful to ensure that the output JSON only consists of ascii characters.

Now you can do this at the beginning of every module.

```
logger = logging.getLogger(__name__)
logger.setLevel('DEBUG')
log_event = LogEvent()

# how to use 
logger.debug(log_event.format("test-log", param1="abc", param2="def"))
```

**Note:** If you are using a logging dashboard like AWS Cloudwatch, AWS automatically adds the timestamp of each log event. In that case, you can remove `%(asctime)s` from the root log format.

Ofcourse, you can take this and alter it the way you want. Follow for more! ✌️