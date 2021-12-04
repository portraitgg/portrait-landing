module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'select',
        name: 'level',
        message: 'Which atomic level?',
        choices: ['atoms', 'molecules', 'organisms']
      },
      {
        type: 'input',
        name: 'component_name',
        message: 'What is the component name?'
      }
    ]
    return inquirer
      .prompt(questions)
      .then(answers => {
        const { level } = answers
        const absPath = `src/components/${level}/`
        return { ...answers, absPath, level }
      })
  }
}
