const checkWinner = (p: string, c: string) => {
  switch (c) {
    case 'rock':
      switch (p) {
        case 'paper':
        case 'spock':
          return p;
        case 'scissors':
        case 'lizard':
          return c;
        default:
          return 'tie';
      }

    case 'paper':
      switch (p) {
        case 'rock':
        case 'spock':
          return c;
        case 'scissors':
        case 'lizard':
          return p;
        default:
          return 'tie';
      }

    case 'scissors':
      switch (p) {
        case 'rock':
        case 'spock':
          return p;
        case 'paper':
        case 'lizard':
          return c;
        default:
          return 'tie';
      }

    case 'lizard':
      switch (p) {
        case 'spock':
        case 'paper':
          return c;
        case 'rock':
        case 'scissors':
          return p;
        default:
          return 'tie';
      }

    case 'spock':
      switch (p) {
        case 'paper':
        case 'lizard':
          return p;
        case 'scissors':
        case 'rock':
          return c;
        default:
          return 'tie';
      }

    default:
      return 'tie';
  }
};

export default checkWinner;
