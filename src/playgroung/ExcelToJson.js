import XLSX from 'xlsx';

function excelToJson(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = event.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const result = XLSX.utils.sheet_to_json(worksheet);
        resolve(result);
      };
      reader.onerror = (event) => {
        reject(event);
      };
      reader.readAsBinaryString(file);
    });
  }

  export default excelToJson