import path from 'path';
import fs from 'fs';
import { MESSAGES } from '../../constants';

function buildPath() {
  return path.join(process.cwd(), 'data', 'data.json');
}

function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  return JSON.parse(jsonData);
}

export default function handler(req, res) {
  const { method } = req;
  const filePath = buildPath();
  const { all_events, events_categories } = extractData(filePath);

  if (!all_events) {
    return res.status(404).json({
      message: MESSAGES.error.dataNotFound,
    });
  }

  if (method === 'POST') {
    let isDataChanged = false;
    const { email, eventId } = req.body;
    const newAllEvents = all_events.map(event => {
      if (event.id === eventId) {
        if (event.emails_registered.includes(email)) {
          res.status(409).json({
            message: `${MESSAGES.error.emailRegistered}: <${email}>`,
          });

          return event;
        } else {
          isDataChanged = true;

          return {
            ...event,
            emails_registered: [...event.emails_registered, email],
          };
        }
      }

      return event;
    });

    if (isDataChanged) {
      fs.writeFileSync(
        filePath,
        JSON.stringify({ events_categories, all_events: newAllEvents })
      );

      return res.status(200).json({
        message: `${MESSAGES.success.eventRegistered}: "${eventId}". Check mailbox for <${email}>.`,
      });
    }
  }
}
