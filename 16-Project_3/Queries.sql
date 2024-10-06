--What is the overall graduation rate across all schools?
SELECT 
    SUM(Y.No_Graduated) * 1.0 / SUM(Y.No_in_Class) * 100 AS Overall_Graduation_Rate
FROM 
    Yr2023_Grad_Data AS Y;


--How does the graduation rate vary by male/female (I might explore different subgroups depending on the data).
SELECT 
    Y.Subgroup_Name, 
    SUM(Y.No_Graduated) * 1.0 / SUM(Y.No_in_Class) * 100 AS Graduation_Rate
FROM 
    Yr2023_Grad_Data AS Y
GROUP BY 
    Y.Subgroup_Name;


--What are the top schools with the highest graduation rates for specific subgroups?
SELECT 
    Y.School_Name, 
    Y.Subgroup_Name, 
    AVG(Y.Percent_Graduated) AS Graduation_Rate
FROM 
    Yr2023_Grad_Data AS Y
WHERE 
    Y.Subgroup_Name = 'Specific_Subgroup'  -- Replace with your specific subgroup, e.g., 'Male'
GROUP BY 
    Y.School_Name, Y.Subgroup_Name
ORDER BY 
    Graduation_Rate DESC
LIMIT 10;


--Which districts or schools show the largest gaps in graduation rates between subgroups?
SELECT 
    Y.School_Name, 
    MAX(Y.Percent_Graduated) - MIN(Y.Percent_Graduated) AS Graduation_Rate_Gap
FROM 
    Yr2023_Grad_Data AS Y
GROUP BY 
    Y.School_Name
ORDER BY 
    Graduation_Rate_Gap DESC;


--What is the distribution of schools based on the % of students who graduated?
SELECT 
    NTILE(10) OVER (ORDER BY Y.Percent_Graduated DESC) AS Decile, 
    COUNT(Y.School_ID) AS Num_Schools
FROM 
    Yr2023_Grad_Data AS Y
GROUP BY 
    Decile;
