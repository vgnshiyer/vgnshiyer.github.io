function getTextSize(level: number, minLevel: number) {
  switch(level - minLevel) {
      case 0:
          return 'text-md';
      case 1:
          return 'text-sm';
      case 2:
          return 'text-sm';
      case 3:
          return 'text-xs';
      default:
          return 'text-xs';
  }
}

const TableOfContents = (props: any) => {
  const headings = props.headings;

  if (!headings.length) {
      return null;
  }

  const minLevel = Math.min(...headings.map(( { level }: any ) => level));

  return (
    <div className='w-1/4 hidden lg:block ml-8 fixed top-0 right-0 p-4 mt-40'>
        <h3 className='text-2xl text-black dark:text-white font-bold'>On this page</h3>
        <ul className='list-disc list-inside mt-2'>
            {headings.map(( { id, level, text }: any ) => (
              <li key={id} className={`text-tertiary-light dark:text-tertiary-dark ${getTextSize(level, minLevel)} ml-${(level - minLevel) * 2} mb-1 list-none hover:text-contrast-light dark:hover:text-contrast-dark`}>
                <a href={`#${id}`}>{text}</a>
              </li>
            ))}
        </ul>
    </div>
  )
}

export default TableOfContents