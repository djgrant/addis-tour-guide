import React from 'react';
import { navigate } from 'gatsby-link';
import styled from '@emotion/styled/macro';
import Article from '../../components/atoms/article';
import Box from '../../components/atoms/box';
import Button from '../../components/atoms/button';
import Jumbotron from '../../components/molecules/jumbotron';
import ContactForm from '../../components/organisms/contact-form';
import Layout from '../../components/organisms/layout';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const Fieldset = styled(Box)`
  label,
  input,
  textarea {
    width: 100%;
    max-width: 500px;
    height: 30px;
  }
  textarea {
    height: 150px;
  }
  label {
    display: block;
    margin-top: 10px;
  }
`;
export default class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <Box container gutter pt={[3, 4]}>
          <h1>Contact</h1>
          <Box display="flex" flexDirection={['column', 'row']} mt={4}>
            <Box flex="1" pr={[0, 5]} pb={[4, 0]}>
              <Article>
                <p>
                  You can get in touch with Abenezere directly using the details
                  below, or by filling out the contact form.
                </p>
                <p>
                  <strong>Mobile:</strong> +251909538319
                </p>
                <p>
                  <strong>Email:</strong>
                  <table cellpadding={0} cellspacing={0} border={0}>
                    <tr>
                      <td>addistourguid</td>
                      <td>e@outloo</td>
                      <td>k.com</td>
                    </tr>
                  </table>
                </p>
              </Article>
            </Box>
            <Box flex="1">
              <ContactForm />
            </Box>
          </Box>
        </Box>
      </Layout>
    );
  }
}
