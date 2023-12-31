function getTextSize(level: number) {
  switch(level) {
      case 1:
          return 'text-xl';
      case 2:
          return 'text-lg';
      case 3:
          return 'text-md';
      case 4:
          return 'text-sm';
      default:
          return 'text-xs';
  }
}

const TableOfContents = (props: any) => {
  const headings = props.headings;

  if (!headings.length) {
      return null;
  }

  return (
    <div className='w-1/4 hidden lg:block ml-8 fixed top-0 right-0 p-4 mt-28'>
        <h3 className='text-2xl text-white font-bold'>On this page</h3>
        <ul className='list-disc list-inside mt-2'>
            {headings.map(( { id, level, text }: any ) => (
              <li key={id} className={`text-slate-400 ${getTextSize(level)} ml-${level * 2} mb-1 list-none`}>
                <a href={`#${id}`}>{text}</a>
              </li>
            ))}
        </ul>
    </div>
  )
}

export default TableOfContents