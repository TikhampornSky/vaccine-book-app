"use client"

export default function InteractiveCard({children, name}: {children: React.ReactNode, name: string}) {
    function onSelected() {
        alert('You clicked ' + name + '!')
    }

    function onMouseAction(event: React.SyntheticEvent) {
        if (event.type == 'mouseover') {
            event.currentTarget.classList.remove('shadow-[0px_0px_8px_5px_#000000]')
            event.currentTarget.classList.add('shadow-[0px_0px_8px_12px_#000000]')

            event.currentTarget.classList.remove('bg-white')
            event.currentTarget.classList.add('bg-neutral-200')
        } else {
            event.currentTarget.classList.remove('shadow-[0px_0px_8px_12px_#000000]')
            event.currentTarget.classList.add('shadow-[0px_0px_8px_5px_#000000]')

            event.currentTarget.classList.remove('bg-neutral-200')
            event.currentTarget.classList.add('bg-white')
        }
    }

    return (
        <div className='w-auto h-full rounded-lg m-4 bg-white shadow-[0px_0px_8px_5px_#000000]'
        onClick={() => onSelected()}
        onMouseOver={(e) => onMouseAction(e)}
        onMouseOut={(e) => onMouseAction(e)}>
            {children}
        </div>
    )
}