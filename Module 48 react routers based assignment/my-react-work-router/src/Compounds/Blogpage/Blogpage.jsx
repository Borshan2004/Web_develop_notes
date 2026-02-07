import React from 'react';


const BlogPage = () => {
    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.title}>Law & Justice Blog</h1>
                <p style={styles.subtitle}>
                    Simple explanations of important legal concepts
                </p>
            </header>

            <main style={styles.blogContainer}>
                <article style={styles.article}>
                    <h2 style={styles.articleTitle}>1. What is Law?</h2>
                    <p style={styles.text}>
                        Law is a system of rules created and enforced by a governing authority
                        to regulate behavior in society. It helps maintain order, protect rights,
                        and ensure justice.
                    </p>
                    <p style={styles.text}>
                        Without law, society would face chaos, as there would be no clear rules
                        to resolve disputes or punish wrongdoing.
                    </p>
                </article>

                <article style={styles.article}>
                    <h2 style={styles.articleTitle}>2. Purpose of Law in Society</h2>
                    <p style={styles.text}>
                        The main purpose of law is to ensure peace, security, and fairness in society.
                        Laws protect individuals from harm and provide a framework for resolving conflicts.
                    </p>
                    <p style={styles.text}>
                        Law also promotes equality by treating everyone equally before the law,
                        regardless of status or power.
                    </p>
                </article>

                <article style={styles.article}>
                    <h2 style={styles.articleTitle}>3. Types of Law</h2>
                    <p style={styles.text}>
                        There are several types of law, including:
                    </p>
                    <ul style={styles.list}>
                        <li>Criminal Law – deals with crimes and punishments</li>
                        <li>Civil Law – resolves disputes between individuals</li>
                        <li>Constitutional Law – defines the structure of government</li>
                        <li>International Law – governs relations between countries</li>
                    </ul>
                </article>

                <article style={styles.article}>
                    <h2 style={styles.articleTitle}>4. Difference Between Civil Law and Criminal Law</h2>
                    <p style={styles.text}>
                        Civil law deals with disputes between private individuals, such as property
                        issues or contract breaches. The goal is compensation.
                    </p>
                    <p style={styles.text}>
                        Criminal law deals with offenses against the state, such as theft or murder.
                        The goal is punishment and maintaining public order.
                    </p>
                </article>

                <article style={styles.article}>
                    <h2 style={styles.articleTitle}>5. Importance of Law in Daily Life</h2>
                    <p style={styles.text}>
                        Law affects our daily life in many ways, from traffic rules to consumer rights.
                        It ensures safety, fairness, and accountability.
                    </p>
                    <p style={styles.text}>
                        By following the law, citizens contribute to a stable and organized society.
                    </p>
                </article>
            </main>

          
        </div>
    );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  },
  header: {
    backgroundColor: "#0EA106",
    color: "#fff",
    padding: "30px",
    textAlign: "center",
  },
  title: {
    margin: 0,
    fontSize: "34px",
  },
  subtitle: {
    marginTop: "10px",
    fontSize: "16px",
  },
  blogContainer: {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "0 20px",
  },
  article: {
    backgroundColor: "#ffffff",
    padding: "25px",
    marginBottom: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  articleTitle: {
    color: "#2c3e50",
    marginBottom: "15px",
  },
  text: {
    lineHeight: "1.6",
    color: "#333",
    marginBottom: "10px",
  },
  list: {
    paddingLeft: "20px",
    color: "#333",
  },
  footer: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#222",
    color: "#fff",
  },
};


export default BlogPage;


