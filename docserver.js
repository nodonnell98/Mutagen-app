const express = require('express');
const mammoth = require('mammoth');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());

app.get('/api/convert/:folder/:filename', async (req, res) => {
  const { folder, filename } = req.params;
  const filePath = path.join(__dirname, 'src', 'components', 'DocsComponents', 'Documents', folder, `${filename}.docx`);

  try {
    const result = await mammoth.convertToMarkdown({ path: filePath });
    res.send(result.value);
  } catch (error) {
    console.error(error);
    res.status(500).send('Conversion error');
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
