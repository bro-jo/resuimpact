import React from 'react';
import css from './style.less';
import {Alert, Col, Container, FormControl, InputGroup, Row} from 'react-bootstrap';
import Header from '../component/Header';


const ruleMap = {
  'Led': ['Chaired']
};

const replaceAll = (str, search, replace) => str.split(search).join(replace);

class Home extends React.Component {
  state = {
    isConverting: false,
    originalResume: '',
    impactedResume: '',
  };

  handleResumeChange = async (value) => {
    this.setState(
      {originalResume: value, isConverting: true},
      () => {
        let original = (this.state.originalResume + ' ').trim();

        Object.keys(ruleMap)
          .map(key => ({key, value: ruleMap[key]}))
          .forEach(({key, value}) => {
            original = replaceAll(original, key, value[0]);
          });

        this.setState({impactedResume: original, isConverting: false});
      },
    );
  };

  renderInput = () => (
    <Col md={6} className="mt-5">
      <label className={css.label}>Paste your resume!</label><br />
      <FormControl
        className={css.resumeInput}
        as="textarea"
        rows="10"
        onChange={(e) => this.handleResumeChange(e.target.value)}
        value={this.state.originalResume}
      />
    </Col>
  );

  renderResult = () => (
    <Col md={6} className="mt-5">
      <label className={css.label}>Impacted!</label><br />
      {this.state.isConverting
        ? <p className={css.blueText}>Please wait...</p>
        : this.state.impactedResume
          ? (
            <Alert variant="success">
              {this.state.impactedResume
                .split('\n').map((e, i) => <span key={`${i}-${e.substring(0, 3)}`} className="mb-0">{e}<br /></span>)}
            </Alert>
          ) : <div />
      }
    </Col>
  );

  render() {
    return (
      <div>
        <Header />
        <Container className="mt-1">
          <Row>
            {this.renderInput()}
            {this.renderResult()}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
