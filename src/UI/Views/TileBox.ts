import { UIView, VStack } from '@tuval/forms';

export function TileBox(...content: any[]): UIView {
    return (
        VStack(
            VStack(
                ...content
            )
                .padding(10)
                .backgroundColor('rgb(255,255,255,60%)')
                .cornerRadius('12px')
                .shadow({ default: '0 1px 3px 0 rgb(0 0 0 / 10%), 0 2px 5px 0 rgb(0 0 0 / 5%)', focus: '0 0 3px 1px #00c3ff' })
                .tabIndex(0)
        ).padding(2)
    )
}