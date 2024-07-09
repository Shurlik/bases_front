import {saveAs} from 'file-saver';
import * as XLSX from 'xlsx'
import {toast} from "react-toastify";

export default function saveToXls(data, fileName) {
	if (!data || !Array.isArray(data) || data.length === 0) {
		toast.warning('Немає що завантажувати');
		return;
	}
	const worksheet = XLSX.utils.json_to_sheet(data);
	const workbook = XLSX.utils.book_new();
	XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
	const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
	const blob = new Blob([excelBuffer], {type: 'application/octet-stream'});
	saveAs(blob, `${fileName}.xlsx`);
};
