const createJob = async(req, res)=>{
    res.send('createJob')
}
const deleteJob = async(req, res)=>{
    res.send('deletJob')
}
const getAllJobs = async(req, res)=>{
    res.send('getall')
}
const updateJob = async(req, res)=>{
    res.send('update')
}
const showStats = async(req, res)=>{
    res.send('show Stats')
}
export { createJob, deleteJob, getAllJobs, updateJob, showStats }