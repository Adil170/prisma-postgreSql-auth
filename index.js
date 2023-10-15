import express from 'express';
import "dotenv/config";
import userRouter from "./Routes/userRoute.js"

const app = express();
const port =  process.env.PORT | 5000;


// Middleware to parse JSON requests
app.use(express.json());

// Register routes from the router module
app.get("/" ,(req , res) => {
  res.json({message : "hello world "})
}) 
  

app.use('/api' ,userRouter)
// Start the Express server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
