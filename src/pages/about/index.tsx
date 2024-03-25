import { graphql, type HeadFC, type PageProps } from 'gatsby';
import React from 'react';

import PageTitle from '@/src/components/Typography/PageTitle';
import Layout from '@/src/layout';
import { classNames } from '@/src/utils/className';

import { aboutWrap, contactContent, contactTitle, contactWrap, sectionWrap } from './style.module.scss';

const AboutPage = ({ location, data }: PageProps<Queries.AboutPageQuery>) => {
  console.log('about', data);
  const email = data.site?.siteMetadata?.author?.bio?.email as string;
  const nickname = data.site?.siteMetadata?.author?.nickname as string;
  const github = data.site?.siteMetadata?.author?.social?.github as string;

  const contactList: {
    title: string;
    content: string;
  }[] = [
    {
      title: 'Email',
      content: email,
    },
    {
      title: 'Github',
      content: github,
    },
  ];
  return (
    <Layout location={location}>
      <section className={classNames(sectionWrap, aboutWrap)}>
        <PageTitle text={'About'} />
        <p>안녕하세요. 개발자 {nickname} 입니다.</p>
        <p>개발하며 얻는 지식들을 기록하기 위한 사이트 입니다.</p>
      </section>

      <section className={classNames(sectionWrap, contactWrap)}>
        <h3 className={contactTitle}>Contact</h3>
        {contactList.map((contact) => (
          <a
            key={contact.title}
            href={contact.title === 'Email' ? `mailto:${contact.content}` : contact.content}
            target='_blank'
            rel='noreferrer noopener'
            className={contactContent}
          >
            {contact.title}
            {contact.title === 'Email' && `: ${contact.content}`}
          </a>
        ))}
      </section>
    </Layout>
  );
};

export const Head: HeadFC = () => <title>About Page</title>;

export const query = graphql`
  query AboutPage {
    site {
      siteMetadata {
        title
        description
        siteUrl
        language
        author {
          bio {
            email
            residence
          }
          name
          nickname
          social {
            github
            resume
          }
          stack
        }
      }
    }
  }
`;

export default AboutPage;
