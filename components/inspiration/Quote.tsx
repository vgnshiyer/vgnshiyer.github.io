const Quote = ({ quote }: { quote: any }) => {
  const quoteText = quote.text;
  const by = `${quote.author ? "By " + quote.author + " | " : ""}${quote.date}`

  return (
    <div>
      <p className="text-sm text-tertiary-light dark:text-tertiary-dark">
        {by}
      </p>
      <p className="bg-semi-light dark:bg-semi-dark rounded-xl p-4 text-tertiary-light dark:text-tertiary-dark mt-4">
        {quoteText}
      </p>
    </div>
  )
};

export default Quote;