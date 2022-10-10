import { DateTime } from '@tuval/core';
import { IActivityInfo } from './IActivityInfo';

export interface IActivityInfoBag {
    [key: string]: IActivityInfo;
}
export interface IDataSet {
    ProjectId: string;
    Id: string;
    ParentDataSetId: string;
    DonorId: string;
    Name: string;
    CreatedDate: DateTime;
    FilteredData: any[];
    ConditionRules: string;
    EventLog: any;
    Separator: string;
    CaseColumn: string;
    ActivityColumn: string;
    TimeStampColumn: string;
    StartDateColumn: string;
    CostColumn: string;
    ActivityInfo: IActivityInfoBag;
}