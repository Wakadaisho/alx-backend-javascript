import { RowID, RowElement} from './interface';

declare function insertRow(row: RowElement): RowID;
declare function updateRow(rowID: RowID, row: RowElement): void;
declare function deleteRow(rowID: RowID): void;

