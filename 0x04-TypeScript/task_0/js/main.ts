interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = { firstName: "John", lastName: "Doe", age: 23, location: "Nairobi" }
const student2: Student = { firstName: "Jane", lastName: "Doess", age: 27, location: "Mombasa" }

const studentsList: Student[] = [student1, student2];

type RowData = Array<String | number>

enum ROW_TYPE {
    HEADER = 'th',
    BODY = 'tr',
}

function createTableRow(data: RowData, header: ROW_TYPE = ROW_TYPE.BODY): HTMLTableRowElement {
    return data.reduce((acc, curr) => { 
        const cell = document.createElement('td');
        cell.innerHTML = curr.toString();
        acc.append(cell);
        return acc },
            document.createElement(header)) as HTMLTableRowElement
}

const table = document.createElement('table');
table.append(createTableRow(["First Name", "Location"], ROW_TYPE.HEADER));

studentsList.forEach(({ firstName, lastName }: Student) => {
    table.append(createTableRow([firstName, lastName]))
});

document.body.appendChild(table);