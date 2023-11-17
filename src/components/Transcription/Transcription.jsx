import { Component } from 'react';

export class Transcription extends Component {
  state = {
    text: '',
    transcription: '',
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  handleTranscription = () => {
    const transcript = this.state.transcription.split('');
    const viableText = transcript
      .map(el => {
        switch (el) {
          case 'q':
            return 'й';
          case 'w':
            return 'ц';
          case 'e':
            return 'у';
          case 'r':
            return 'к';
          case 't':
            return 'е';
          case 'y':
            return 'н';
          case 'u':
            return 'г';
          case 'i':
            return 'ш';
          case 'o':
            return 'щ';
          case 'p':
            return 'з';
          case '[':
            return 'х';
          case ']':
            return 'ъ';
          case 'a':
            return 'ф';
          case 's':
            return 'ы';
          case 'd':
            return 'в';
          case 'f':
            return 'а';
          case 'g':
            return 'п';
          case 'h':
            return 'р';
          case 'j':
            return 'о';
          case 'k':
            return 'л';
          case 'l':
            return 'д';
          case ';':
            return 'ж';
          case `'`:
            return 'э';
          case 'z':
            return 'я';
          case 'x':
            return 'ч';
          case 'c':
            return 'с';
          case 'v':
            return 'м';
          case 'b':
            return 'и';
          case 'n':
            return 'т';
          case 'm':
            return 'ь';
          case ',':
            return 'б';
          case '.':
            return 'ю';
          case '/':
            return '.';
          case ' ':
            return ' ';
          case '`':
            return 'ё';
          case '?':
            return ' ?/,';
          default:
            return el;
        }
      })
      .join('');
    this.setState({ text: viableText });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="transcription"
          value={this.state.transcription}
          onChange={this.handleChange}
        ></input>
        <p>{this.state.text}</p>
        <button onClick={this.handleTranscription}>Transcript</button>
      </div>
    );
  }
}

export default Transcription;
