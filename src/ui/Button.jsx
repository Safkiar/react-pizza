import { Link } from "react-router-dom"

function Button({children, disabled, to, type, onClick}) {

  const base = " text-sm disabled:cursor-not-allowed focus:ring-offset-2 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:outline-none duration-300 transition-colors hover:bg-yellow-300 rounded-full tracking-wide bg-yellow-400 uppercase font-semibold text-stone-800 inline-block "
  const styles = {
    primary: base + ' py-3 px-4 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
    secondary: " text-sm  disabled:cursor-not-allowed focus:ring-offset-2 focus:bg-stone-300 focus:ring focus:ring-stone-200 focus:outline-none duration-300 transition-colors hover:bg-stone-300 rounded-full tracking-wide  uppercase font-semibold text-stone-400 inline-block border-2 border-stone-300 py-2.5 px-4 md:px-6 md:py-3.5 hover:text-stone-800 focus:text-stone-800"
  }
  

  if(to) return <Link to={to} className={styles[type]}>{children}</Link>

  if(onClick)   return (
    <button onClick={onClick }className={styles[type]}
    disabled={disabled} >
      {children}
    </button>   )


  return (
    <button className={styles[type]}
    disabled={disabled} >
      {children}
    </button>
  )
}

export default Button