'use client';

import { useState } from 'react';
import ClientEffects from '../components/ClientEffects';

export default function StartProject() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    marketingSupport: '',
    startTimeline: '',
    projectDetails: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function submitLead(event) {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'Mavorra Creative landing page' })
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.message || 'Unable to submit enquiry.');
      }

      setStatus({
        type: 'success',
        message: 'Your enquiry has been sent. We will review it and come back with the right next step.'
      });

      setForm({
        name: '',
        email: '',
        phone: '',
        businessName: '',
        marketingSupport: '',
        startTimeline: '',
        projectDetails: ''
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Something went wrong. Please try again.'
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <ClientEffects />

      <header>
        <div className="wrap nav">
          <a className="brand magnetic" href="/" aria-label="Mavorra Creative home">
            <img src="/logo.png" alt="Mavorra Creative logo" />
          </a>
          <a className="btn magnetic" href="/">Back to website</a>
        </div>
      </header>

      <main>
        <section className="landing standaloneLanding">
          <div className="heroOrnament one" aria-hidden="true"></div>
          <div className="heroOrnament two" aria-hidden="true"></div>

          <div className="wrap landingGrid">
            <aside className="landingIntro reveal isVisible">
              <div>
                <p className="eyebrow">Start a project</p>
                <h1>Tell us what marketing makes sense.</h1>
                <p>Use this form to show us where your business is now, what kind of support you need, and how quickly you want to begin.</p>
              </div>
              <div className="miniProof">
                <span>Marketing Buffet for affordable monthly consistency</span>
                <span>À la carte marketing for premium custom work</span>
                <span>Your enquiry saves straight into Google Sheets</span>
              </div>
            </aside>

            <section className="formCard reveal isVisible" aria-label="Start a project form">
              <div className="formTop">
                <h2>Project enquiry.</h2>
                <p>Send the essentials. We will use this to understand the right route before discussing scope, price and timeline.</p>
              </div>

              <form onSubmit={submitLead}>
                <div className="two">
                  <label>Full name
                    <input name="name" value={form.name} onChange={updateField} type="text" autoComplete="name" required placeholder="Your name" />
                  </label>
                  <label>Email address
                    <input name="email" value={form.email} onChange={updateField} type="email" autoComplete="email" required placeholder="you@example.com" />
                  </label>
                </div>

                <div className="two">
                  <label>Phone number
                    <input name="phone" value={form.phone} onChange={updateField} type="tel" autoComplete="tel" required placeholder="+44 0000 000000" />
                  </label>
                  <label>Name of business
                    <input name="businessName" value={form.businessName} onChange={updateField} type="text" autoComplete="organization" required placeholder="Your business name" />
                  </label>
                </div>

                <label>What type of marketing support do you need?
                  <select name="marketingSupport" value={form.marketingSupport} onChange={updateField} required>
                    <option value="" disabled>Select one</option>
                    <option>Marketing Buffet package</option>
                    <option>À la carte marketing</option>
                    <option>Not sure yet</option>
                  </select>
                </label>

                <label>How soon are you looking to start?
                  <select name="startTimeline" value={form.startTimeline} onChange={updateField} required>
                    <option value="" disabled>Select one</option>
                    <option>Immediately</option>
                    <option>Within 2 weeks</option>
                    <option>Within 1 month</option>
                    <option>Within 3 months</option>
                    <option>I am planning ahead</option>
                  </select>
                </label>

                <label>What do you need help with?
                  <textarea name="projectDetails" value={form.projectDetails} onChange={updateField} placeholder="Briefly tell us what you want to improve, launch or create." />
                </label>

                <div className="submitRow">
                  <button type="submit" disabled={submitting}>{submitting ? 'Sending...' : 'Send enquiry'}</button>
                  <p className="note">Submissions go to your connected Google Sheet through Vercel.</p>
                </div>

                {status.message && <div className={`status ${status.type}`}>{status.message}</div>}
              </form>
            </section>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot">
          <span>© Mavorra Creative</span>
          <span>Built to be noticed. Designed to be remembered.</span>
          <div className="socialLinks">
            <a href="https://www.instagram.com/mavorracreative?igsh=MTdta25jM3hpanRheQ==" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com/share/1Y4aCrn8jT/" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
      </footer>
    </>
  );
}
