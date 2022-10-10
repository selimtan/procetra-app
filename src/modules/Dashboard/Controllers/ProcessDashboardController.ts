import { CGSize } from '@tuval/cg';
import { TuRectangle, TuViewGridStyle, TuViewSnapStyle, ViewRenderingMode } from '@realmocean/diagram';
import { int } from '@tuval/core';
import {
    cTopLeading,
    ForEach,
    HDivider,
    HStack,
    Spacer,
    State,
    Text,
    TwoColumnLayout2,
    UIButton,
    UIController,
    UIScene,
    UIView,
    VStack,
} from '@tuval/forms';
import { Brushes, Pens } from '@tuval/graphics';

import { DashboardView } from '../../../UI/Controls/DashboardView/DashboardView';
import { PageTitle } from '../../../UI/Views/PageHeader';
import { PaletteModel } from '../Models/MDPalette';
import { MIPaletteCategory } from '../Models/MIPaletteCategory';
import { PaletteView } from '../Views/PaletteView';


export class ProcessDashboardController extends UIController {

    private palettedata: MIPaletteCategory[];
    @State()
    private svg: DashboardView;

    @State()
    private test: int;

    protected InitController(): void {

        this.svg = new DashboardView();
        /*  svg.pId = dataset.ProjectId;
         svg.dId = dataset.Id; */
        this.svg.beginUpdate();
        this.svg.RenderingMode = ViewRenderingMode.Html;
        this.svg.ResizeHandleSize = new CGSize(10, 10);
        this.svg.Width = 1800;
        this.svg.Height = 1500;
        this.svg.GridCellSize = new CGSize(20, 20);
        this.svg.GridLineWidth = 1;
        this.svg.GridMajorLineWidth = 1;
        this.svg.GridSnapDrag = TuViewSnapStyle.Jump;
        this.svg.GridSnapResize = TuViewSnapStyle.Jump;
        this.svg.GridStyle = TuViewGridStyle.Line;
        this.svg.GridMajorLineColor = this.svg.GridLineColor.clone();

        const rect = new TuRectangle();
        rect.Left = 50;
        rect.Top = 50;
        rect.Width = 150;
        rect.Height = 105;
        rect.Pen = Pens.Black;
        rect.Brush = Brushes.White;

        this.svg.Document.Add(rect);

        this.palettedata = PaletteModel;

        this.test = 2;
    }

    public LoadView(): UIView {
        return (
            UIScene(
                VStack({ alignment: cTopLeading, spacing: 10 })(
                    HStack({ alignment: cTopLeading, spacing: 10 })(
                        PageTitle('\\f0b3', 'Dashboard'),
                        Spacer(),
                        HStack({ spacing: 5 })(
                            ...ForEach(['Overview', 'Throughput times', 'Activities'])((name) =>
                                UIButton(
                                    Text(name)
                                ).border('solid 1px gray').cornerRadius('10px').padding('3px 10px 3px 10px')
                            )
                        ).width()
                    ).height()/* .height('20px') */,
                    HDivider().height('1px').backgroundColor('rgb(120,120,120,20%)'),
                    TwoColumnLayout2(
                        {
                            left: [
                                VStack({alignment:cTopLeading})(
                                    VStack({alignment:cTopLeading})(
                                        this.svg as any
                                    )
                                    .position('absolute')
                                )
                                .overflowX('auto')
                                .overflowY('auto')
                            ],
                            right: [
                                PaletteView(this.palettedata)
                            ]
                        }
                    )

                ).padding('10px')
            )
            .alignment(cTopLeading)
        )
    }
}