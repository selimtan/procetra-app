import { TuView,DragEventArgs,IDataObject,ITuCollection, TuObject, Types, TuText, Middle } from "@realmocean/diagram";
import { CGPoint, CGSize, CGColor } from '@tuval/cg';
import { Activator, typeOf, Type } from '@tuval/core';
import { TuDashboardShape } from './TuDashboardShape';

import { _Types } from "../../../__manifest__/__types__";
import { TdiActivityMeanDurationChart } from './Shapes/TdiActivityMeanDurationChart';
import { TdiActivityMedianDurationChart } from "./Shapes/TdiActivityMedianDurationChart";


let sayac = 0;

export class DashboardView extends TuView {

    public pId: string;
    public dId: string;
    protected override  DoExternalDrop(evt: DragEventArgs): ITuCollection {
        const data: IDataObject = evt.Data;
        const type = data.GetData('Type');

        const screenPnt: CGPoint = new CGPoint(evt.X, evt.Y);
        this.startTransaction();

        this.Selection.Clear();



        if (type instanceof Type) {
            if (type === typeOf(Types.TuText)) {
                const rect: TuText = Activator.CreateInstance(type);
                rect.Text = 'Text';
                //rect.Brush = Brushes.BlueViolet;
                rect.Width = 200;
                rect.Height = 200;

                rect.Wrapping = true;
                rect.BackgroundColor = CGColor.Cornsilk;
                rect.Multiline = true;
                // rect.AutoResizes = true;
                rect.TransparentBackground = false;
                rect.Alignment = Middle;
                rect.WrappingWidth = 300;
                rect.Bordered = true;
                rect.Resizable = true;
                rect.FontSize = 20;

                this.Selection.HotSpot = new CGSize(25, 20);
                //const newobj = this.Document.addCopy(rect, screenPnt);
                this.Document.Add(rect);
                this.Selection.Add(rect);
            } else if (type === typeOf(_Types.TdiActivityMeanDurationChart)) {
                const rect: TuObject = new TdiActivityMeanDurationChart() as any;  //Activator.CreateInstance(type);
                (rect as any).SetDataSet(this.pId, this.dId);
                //rect.Brush = Brushes.BlueViolet;
                rect.Left = -1000;
                rect.Width = 400;
                rect.Height = 250;

                this.Selection.HotSpot = new CGSize(100, 100);

                //const newobj = this.Document.addCopy(rect, screenPnt);
                this.Document.Add(rect);
                this.Selection.Add(rect);
            } else if (type === typeOf(_Types.TdiActivityMedianDurationChart)) {
                const rect: TuObject = new TdiActivityMedianDurationChart() as any;  //Activator.CreateInstance(type);
                (rect as any).SetDataSet(this.pId, this.dId);
                //rect.Brush = Brushes.BlueViolet;
                rect.Left = -1000;
                rect.Width = 400;
                rect.Height = 250;

                this.Selection.HotSpot = new CGSize(100, 100);

                //const newobj = this.Document.addCopy(rect, screenPnt);
                this.Document.Add(rect);
                this.Selection.Add(rect);
            } else if (type === typeOf(_Types.TdiFregProcessExplorerShape)) {
                /* const rect: TuObject = new TdiFregProcessExplorerShape();


                rect.Left = -1000;
                rect.Width = 400;
                rect.Height = 250;

                this.Selection.HotSpot = new CGSize(100, 100);


                this.Document.Add(rect);
                this.Selection.Add(rect); */
            }
        } else {
            const rect: TuObject = new type();  //Activator.CreateInstance(type);

            //rect.Brush = Brushes.BlueViolet;
            rect.Left = -1000;


            this.Selection.HotSpot = new CGSize(100, 100);

            //const newobj = this.Document.addCopy(rect, screenPnt);
            this.Document.Add(rect);
            this.Selection.Add(rect);
        }

        this.finishTransaction("Insert from TreeView");

        return this.Selection;


    }
}