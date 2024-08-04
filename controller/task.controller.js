const { TaskModal } = require("../modal/task.modal");

const createTask =async (req,res)=>{
    const {title,status,priority,deadline,description,_id}=req.body;
    try{
        const task = _id ? await TaskModal.findById(id):await TaskModal.findOne({status});
        if(task){
        return res.status(401).json({status:"unAuthorized", msg:"Task is already created"})
        }
        const newTask = new TaskModal({
          title,
          status,
          priority,
          deadline,
          description,
        });
        await newTask.save();
        return res.status(201).json({status:"success",msg:"Task is create successfully",data:{newTask}})
    }catch(e){
                return res
                  .status(501)
                  .json({
                    status: "failed",
                    msg: "Task is not created",
                  });

    }
}
const getTask = async(req,res)=>{
    try{
        const task = await TaskModal.find();
        return res.status(200).json({status:"success",msg:"Data is getting", data:{task}})
    }catch(e){
          return res.status(501).json({
            status: "failed",
            msg: "Task is not created",
            e,
          }); 
    }
}
const updateTask=async(req,res)=>{
    const {id}=req.params;
    const { title, status, priority, deadline, description } = req.body;
    try{
          const payload = {
            title,
            status,
            priority,
            deadline,
            description,
          };
        const update = await TaskModal.findOneAndUpdate({_id:id},payload,{new:true});
        return res.status(201).json({status:"update",msg:"task is update successfully",data:{update}})
    }catch(e){
        return res.status(501).json({
          status: "failed",
          msg: "Task is not created",
          e,
        }); 
    }
}
const deleteTask = async(req,res)=>{
    const {id}=req.params;
    try{
        const deleteTask = await TaskModal.findOneAndDelete({_id:id});
        return res.status(200).json({status:"success",msg:"task is delete successfully",deleteTask})
    }catch(e){
          return res.status(501).json({
            status: "failed",
            msg: "Task is not created",
            e,
          });  
    }
}
module.exports = {
    createTask, 
    getTask,
    updateTask,
    deleteTask
};