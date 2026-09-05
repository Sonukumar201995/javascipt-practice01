try {
    console.log("Try block");
    throw new Error("Something went wrong");
} catch (error) {
    console.log("Catch block");
} finally {
    console.log("Finally block");
}