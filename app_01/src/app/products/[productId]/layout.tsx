export default function ProductFeaturedLayout(
    {children} : {children : React.ReactNode}
){
    return (
        <>
        <div>{children}</div>
        <h2>Featured Product</h2>
        </>

    )
}