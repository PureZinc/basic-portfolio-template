import PageModalContainer from "./PageModalContainer";

export default function Contact({isOpenState}) {
  return (
    <PageModalContainer id="about" title="About Me" isOpenState={isOpenState}>
        <div className="block-text">
            <h2>Any Questons?</h2>
            <p>Feel free to reach out here!</p>
        </div>
        <form className="folio-form">
            <input name="name" type="text" placeholder="Name"/>
            <input name="email" type="email" placeholder="Email"/>
            <input name="subject" type="text" placeholder="Subject"/>
            <textarea name="message" id="" cols="30" rows="10" placeholder="Write your message..."></textarea>
            <button type="submit" className="btn btn-primary">Send</button>
        </form>
    </PageModalContainer>
  )
}