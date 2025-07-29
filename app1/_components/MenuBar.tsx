import Link from "next/link";
const MenuBar=()=>{
    return(
        <>
            <Link href="/">home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link href="/input">input</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link href="/show">show</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        </>
    );
}
export default MenuBar;