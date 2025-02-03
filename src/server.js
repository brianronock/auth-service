import app from "./app.js";
import { configure } from "./config/config.js";
// Start the server
app.listen(configure.port, () => {
    console.log(`Server running on port ${configure.port}`);
});