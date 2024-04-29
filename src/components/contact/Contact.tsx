const email = 'eytankrief@gmail.com';

export default function Contact() {
  const handleClick = () => {
    const mailtoLink = `mailto:${email}`;
    window.location.href = mailtoLink;
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '50%',
        margin: '4rem auto 15rem auto',
        textAlign: 'center',
      }}>
      <h1 style={{ fontSize: '40px' }}>Get In Touch</h1>
      <p>I'm looking for new opportunities.</p>
      <button onClick={handleClick} style={{ border: '4px solid' }}>
        Contact
      </button>
      {/* <div style={{ height: '300px' }} /> */}
    </div>
  );
}
