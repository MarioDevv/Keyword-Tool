# KRO - Keyword Research Optimization

KRO (Keyword Research Optimization) is a Python application designed to perform keyword research and optimization tasks. It utilizes various techniques to analyze keywords, generate reports, and provide insights into the data.

## :label: Prerequisites

Before running the application, make sure you have the following:

- Python 3.x installed
- Environment variables set up with the required API key

## :package: Installation

To install the necessary dependencies, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/PhPloveerPhP/KRO.git

2. Navigate to the project directory:

    ```
    cd <project_directory>
    ```

3. Install the required Python packages using pip:

   ```
   pip install -r requirements.txt
   ```

### 📄 Usage

To use the KRO application, follow the instructions below:

1. Set up the required environment variables:

   - `API_KEY`: The API key required for text analysis. Obtain the API key from the provider and set it as an environment variable.

2. Prepare the input data:

   - The application expects a CSV file with keyword data. Ensure that the file is in the correct format and located in the specified path.

3. Run the application:

   ```
   python kro.py
   ```

   The application will perform the following tasks:

   - Generate a table of keywords.
   - Generate a chart of the top keywords.
   - Perform text analysis using the API.
   - Generate a table of entities extracted from the text analysis.
   - Generate a chart of the most relevant entities.

4. Review the generated report:

   The application will create a Markdown report file named `report.md` in the `./dist` directory. Open the report to review the results.

## :pen: Customization

The KRO application can be customized to fit your specific needs. Here are a few possible modifications:

- Modify the input CSV file path (`PATH` variable) in the `kro.py` file to point to your desired file location.
- Adjust the number of keywords and entities displayed in the report by modifying the respective limits in the code.
- Customize the appearance of the generated charts by modifying the `__generate_tree_chart` method in the `Main` class.:

##  :construction: Limitations

- The application relies on external APIs for text analysis. Ensure that you have a valid API key and a stable internet connection for successful analysis.
- The application expects the input CSV file to be formatted correctly. Make sure the file contains the necessary columns in the specified order.

## :wrench: Troubleshooting

If you encounter any issues while running the KRO application, consider the following troubleshooting steps:

- Verify that the environment variables are set up correctly, including the `API_KEY`.
- Ensure that the input CSV file exists in the specified path and has the required columns.
- Check the console output for any error messages. The application will print error messages if any exceptions occur during the process.

## :heart: Contributions

Contributions to the KRO application are welcome. If you have any suggestions, improvements, or bug fixes, please create a pull request or open an issue in the project repository.

## License

The KRO application is released under the [MIT License](https://opensource.org/licenses/MIT).
