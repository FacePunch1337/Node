import EventEmitter from 'events';

class Database extends EventEmitter {
  connect() {
    console.log('Connected to database');
    this.emit('connection');
  }

  disconnect() {
    console.log('Disconnected from database');
    this.emit('disconnection');
  }
}

const db = new Database();

db.on('connection', () => {
  console.log('Connection established');
});

db.on('disconnection', () => {
  console.log('Connection lost');
});

db.connect();
db.disconnect();