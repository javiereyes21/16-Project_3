Project 3

Graduation Rates Analysis Project
Data Engineering Track


Participants:
Javier Reyes Hernandez (Project Lead)
Priscilla Miller
Jonathan Gilbert

Project Overview:
This project focuses on analyzing the graduation rates of schools in Arizona across various subgroups, including gender and other demographics, based on data from the year 2023. 
The key goals are to identify trends, gaps, and distributions in graduation rates to support data-driven decisions in education.

Datasets:
The analysis utilizes three primary datasets:

Schools Table

Contains information about each school, including:
District_ID: Identifier for the district.
School_ID: Unique identifier for each school.
School_Name: Name of the school.
Subgroups Table

Contains subgroup classifications:
Subgroup_No: Unique identifier for each subgroup.
Subgroup_Name: Name of the subgroup (e.g., Male, Female, Ethnicity).
Yr2023_Grad_Data Table

Graduation data for the year 2023:
School_ID: Corresponds to the School in the Schools table.
School_Name: Name of the school.
Subgroup_Name: Name of the subgroup (from the Subgroups table).
No_in_Class: Total number of students in the class.
No_Graduated: Number of students who graduated.
Percent_Graduated: Percentage of students who graduated.
Key Analytical Questions:
Overall Graduation Rate:

What is the overall graduation rate across all schools?
Graduation Rate by Subgroup:

How does the graduation rate vary by gender or other subgroups?
Top Schools for Subgroups:

Which schools have the highest graduation rates for specific subgroups?
Gaps in Graduation Rates:

Which districts or schools show the largest gaps in graduation rates between subgroups?
Distribution of Schools by Graduation Rate:

What is the distribution of schools based on the percentage of students who graduated?
Tools and Technologies:
SQL: For querying and analyzing the dataset.
Python (Optional): For advanced analysis and visualization.
Jupyter Notebooks: For documenting and sharing the analysis process.

How to Run:
Load the datasets into your SQL database.
Run the provided SQL queries to generate insights based on the key questions.
Use optional Python scripts for further visualization and analysis.

Contribution Guidelines:
Javier Reyes Hernandez: Project lead,data Cleaning, Subgroup analysis, overall analysis, query creation.
Priscilla Miller: Data sourcing, 3rd data normal form creation, ERD creation. 
Jonathan Gilbert: Data visualization, Slides creation




