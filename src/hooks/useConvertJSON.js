import { useEffect, useState } from 'react';

const useConvertJSONtoCSV = (json) => {
    const [csv, setCSV] = useState('');

    useEffect(() => {
        const convertJSONtoCSV = (data) => {
            if (!data || typeof data !== 'object') return '';

            const headers = Object.keys(data[0]);
            const csvRows = [];

            csvRows.push(headers.join(','));

            for (const row of data) {
                const values = headers.map(header => {
                    let cellValue = row[header];
                    if (typeof cellValue === 'string') {
                        cellValue = cellValue.replace(/"/g, '""');
                        if (cellValue.includes(',')) {
                            cellValue = `"${cellValue}"`;
                        }
                    }
                    return cellValue;
                });

                csvRows.push(values.join(','));
            }

            return csvRows.join('\n');
        };

        setCSV(convertJSONtoCSV(json));
    }, [json]);

    return csv;
};

export default useConvertJSONtoCSV;
