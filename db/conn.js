const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      "mongodb+srv://djalmahenry:test1103@cluster0.emhndpf.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );

    console.log("Conectado!");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;
