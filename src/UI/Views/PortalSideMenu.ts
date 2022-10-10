import { int } from '@tuval/core';
import { bindState, cTopLeading, ForEach, Icon, TApplication, Text, UIController, UIView, VStack } from '@tuval/forms';

export interface PortalSideMenuParams {
    items: MVIPortalSideMenuItem[];
    // selectedIndex: int,
    selectedAction: (index: int) => void;
    second?: boolean;
}

export interface MVIPortalSideMenuItem {
    name: string;
    icon: string;
    controller: UIController;
    isVisible: () => boolean;
}
export function PortalSideMenu(params: PortalSideMenuParams): UIView {
    const [selectedIndex, setSelectedIndex] = bindState(0)
    if (TApplication.IsPortal) {
        return (
            VStack({ alignment: cTopLeading })(
                ...ForEach(params.items)((item: MVIPortalSideMenuItem, index: int) =>
                    VStack({ spacing: 5 })(
                        Icon(item.icon).size(26),
                        Text(item.name).fontSize('12px').fontFamily('-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"')
                    )
                        .padding(5)
                        .background(selectedIndex === index ? (params.second ? '#777b80' : '#52565b') : { hover: '#eee' } as any)
                        .borderBottom(selectedIndex === index ? '2px solid #e7b54a' : '2px solid transparent')
                        .cursor('pointer')
                        .foregroundColor(selectedIndex === index ? 'white' : { hover: '#333', default: 'white' } as any)
                        .height(80)
                        .onClick(() => { setSelectedIndex(index); params.selectedAction(index); })
                        .visible(item.isVisible())
                )
            )
                /*  .minWidth(params.second ? '75px' : '80px')
                 .width(params.second ? 75 : 80) */
                 .width()
                .initial({ width: 0 }).animate({ width: params.second ? 75 : 80 })
                .background(params.second ? '#52565b' : '#212932')
                .shadow(params.second ? 'inset 24px 0 20px -20px #373b40' : '')
                .borderBottom('2px solid #212932')

        )
    }
}