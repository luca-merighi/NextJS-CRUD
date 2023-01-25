import Button from "./Button"

interface LayoutProps {
    title: string,
    children: any,
    newClient?: () => void
}

export default function Layout(props: LayoutProps) {
    return (
        <main className="
            flex items-center justify-center 
            h-fit w-full">
            <section className="
                bg-slate-800/75
                h-full w-2/3 p-6
                rounded-md">
                <header className="
                    flex items-center justify-between">
                    <h3 className="text-slate-200 text-xl font-semibold">
                        {props.title}
                    </h3>
                    
                    <Button onClick={props.newClient}>
                        Novo Cliente
                    </Button>
                </header>
                    {props.children}
            </section>
        </main>
    )
}