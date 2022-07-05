type BodyProps = {
    children: any;
}

export function Body(props: BodyProps) {
    return(
        <div className="container mx-auto px-4">
            {props.children}
        </div>
    );
}