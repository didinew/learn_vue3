

type Options = {
    el: string
}

type Return = {
    Baseurl: string | null
}

export default function (options: Options): Promise<Return> {
    return new Promise((resolve) => {
        onMounted(() => {
            const file: HTMLImageElement = document.querySelector(options.el) as HTMLImageElement
            // console.log(file)
            file.onload = ():void => {
                resolve({
                    Baseurl: Base64(file)
                })
            }
        })

        const Base64 = (el: HTMLImageElement) => {
            const canvas: HTMLCanvasElement = document.createElement('canvas')
            const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
            canvas.width = el.width
            canvas.height = el.height
            ctx.drawImage(el, 0 , 0, canvas.width, canvas.height)
            console.log(el.width)
            return canvas.toDataURL('image/png')
        }
    })
}