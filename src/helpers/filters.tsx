import data from "../db.json";

const filters = (year: number) => {
  const filterResults = data.filter((item) => item.work_year === year);
  const dataScientistJobs = filterResults
    .filter((item) => item.job_title === "Data Scientist")
    .reduce((acc, iter) => acc + iter.total_jobs, 0);
  const dataScienceManagerJobs = filterResults
    .filter((item) => item.job_title === "Data Science Manager")
    .reduce((acc, iter) => acc + iter.total_jobs, 0);
  const businessIntelligenceEngineerJobs = filterResults
    .filter((item) => item.job_title === "Business Intelligence Engineer")
    .reduce((acc, iter) => acc + iter.total_jobs, 0);
  const dataArchitectJobs = filterResults
    .filter((item) => item.job_title === "Data Architect")
    .reduce((acc, iter) => acc + iter.total_jobs, 0);
  const dataAnalystJobs = filterResults
    .filter((item) => item.job_title === "Data Analyst")
    .reduce((acc, iter) => acc + iter.total_jobs, 0);
  const businessIntelligenceJobs = filterResults
    .filter((item) => item.job_title === "Business Intelligence")
    .reduce((acc, iter) => acc + iter.total_jobs, 0);
  const mlEngineersJobs = filterResults
    .filter((item) => item.job_title === "ML Engineer")
    .reduce((acc, iter) => acc + iter.total_jobs, 0);
  const dataModelersJobs = filterResults
    .filter((item) => item.job_title === "Data Modeler")
    .reduce((acc, iter) => acc + iter.total_jobs, 0);

  const jobsAppearedTimes = [
    dataScientistJobs,
    dataScienceManagerJobs,
    businessIntelligenceEngineerJobs,
    dataArchitectJobs,
    dataAnalystJobs,
    businessIntelligenceJobs,
    mlEngineersJobs,
    dataModelersJobs,
  ];
  const jobTitles = [
    "Data Scientist",
    "Data Science Manager",
    "Business Intelligence Engineer",
    "Data Architect",
    "Data Analyst",
    "Business Intelligence",
    "ML Engineer",
    "Data Modeler",
  ];
  const response = [...new Array(jobTitles.length)].map((_, i) => ({
    job_title: jobTitles[i],
    appearedTimes: jobsAppearedTimes[i],
  }));
  return response;
};

export default filters;
