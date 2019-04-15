export const promptDetails = (session) => {
  switch (session) {
    case 'Incorrect':
      return 0
    case 'Prompt':
      return 0
    case 'Correct':
      return 1
  }
}