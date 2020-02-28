import XLSX from 'xlsx';

const exportedFileType = {
  CSV: 'csv',
  EXCEL: 'xlsx',
}

const defaultOptions = {
  filename: 'file',
  exportedFileType: exportedFileType.EXCEL
};

export default function exportCSVorExcel(data, options = defaultOptions) {
  if (process.browser !== true) {
    return;
  }

  const { filename, exportedFileType } = options;
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();

  /* add worksheet to workbook */
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  XLSX.writeFile(wb, `${filename}.${exportedFileType}`);
}
