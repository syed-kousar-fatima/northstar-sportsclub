export default function Notice({ message, type = 'success' }) {
  if (!message) return null;
  return <div className={`form-notice form-notice--${type}`} role="status">{message}</div>;
}
