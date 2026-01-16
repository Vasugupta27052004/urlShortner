const user = require('../model/user');
const User = require('../model/user');
const shortid = require('shortid');

const Short = async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  const shortUrl = shortid.generate();

  await User.create({
    url,
    shortId: shortUrl
  });

  return res.status(201).json({
    message: "Short URL created",
    shortUrl
  });
};

const Redirect = async (req, res) => {
  const { shortId } = req.params;

  const urlData = await User.findOne({ shortId });

  if (!urlData) {
    return res.status(404).json({ error: "Short URL not found" });
  }

  urlData.visitedCount += 1;
  await urlData.save(); 

  res.redirect(urlData.url);
};
const show =async (req,res)=>{
    const allUrl= await User.find({});
    res.json(allUrl);
    // console.log(allUrl);

}
const deleteUrl=async(req,res)=>{
    const id= await User.findByIdAndDelete(req.params.id);
    res.json({message:"Deleted successfully"});
}
module.exports = { Short, Redirect, show, deleteUrl };