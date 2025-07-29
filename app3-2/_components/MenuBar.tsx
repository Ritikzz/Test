import Link from "next/link";
const MenuBar=()=>{
    return(
        <>
            <Link href="/">home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link href="/about">about</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link href="/contact">contact</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        </>
    );
}
export default MenuBar;