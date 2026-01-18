import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { ref, onValue, push, set } from 'firebase/database';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';

interface Message {
  name: string;
  text: string;
  color: string;
  date: string;
}

const SectionContact = () => {
  const [msgName, setMsgName] = useState("");
  const [msgText, setMsgText] = useState("");
  const [msgColor, setMsgColor] = useState("#9B414B");
  const [showAlert, setShowAlert] = useState(false);
  const [msgData, setMsgData] = useState<Message[]>([]);

  const msgRef = ref(db, 'msg');

  useEffect(() => {
    // Read Data
    const unsubscribe = onValue(msgRef, (snapshot) => {
      const data: Message[] = [];
      snapshot.forEach((child) => {
        data.unshift(child.val());
      });
      setMsgData(data);
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!msgName || !msgText) {
      setShowAlert(true);
      return;
    }

    setShowAlert(false);

    const date = new Date();
    const newPostDate = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;

    const newMsgRef = push(msgRef);
    const postData: Message = {
      date: newPostDate,
      name: msgName,
      text: msgText,
      color: msgColor
    };

    set(newMsgRef, postData);

    // Reset Form
    setMsgName("");
    setMsgText("");
    setMsgColor("#9B414B");
  };

  return (
    <div className="section bg-primary-light relative">
      <div className="w-[80%] mx-auto h-full flex flex-col justify-center items-center">
        <img src="/img/title_guest.svg" alt="Guestbook" className="w-auto h-[7vh] mt-[2vh] mb-[4vh]" />

        <form className="w-[450px] max-w-full flex flex-col items-center gap-3 text-tertiary text-lg font-bold relative">
          <div className="w-full flex items-center">
            <span className="mr-4">Name</span>
            <input
              value={msgName}
              onChange={(e) => setMsgName(e.target.value)}
              maxLength={15}
              type="text"
              placeholder="enter your name"
              className="flex-1 bg-transparent border-b-2 border-tertiary text-secondary outline-none text-lg p-1 placeholder-white/70"
            />
          </div>
          <div className="w-full flex items-center">
            <span className="mr-4">Msgg</span>
            <textarea
              value={msgText}
              onChange={(e) => setMsgText(e.target.value)}
              maxLength={72}
              rows={1}
              placeholder="leave a message! (limit 72 characters)"
              className="resize-none flex-1 bg-transparent border-b-2 border-tertiary text-secondary outline-none text-lg p-1 placeholder-white/70"
            ></textarea>
          </div>
          <div className="w-full flex items-center mt-1.5">
            <span className="mr-4">Color</span>
            {[
              { color: '#9B414B', id: 'red' },
              { color: '#BE9F3C', id: 'yellow' },
              { color: '#0E3150', id: 'blue' }
            ].map((c) => (
              <label key={c.id} className="cursor-pointer mr-2">
                <input
                  type="radio"
                  name="msgColor"
                  value={c.color}
                  checked={msgColor === c.color}
                  onChange={() => setMsgColor(c.color)}
                  className="opacity-0 absolute"
                />
                <span
                  className='block size-7 rounded-full flex items-center justify-center'
                  style={{ backgroundColor: c.color }}
                >
                  {msgColor === c.color && <span className='text-white text-sm'>✔&#xFE0E;</span>}
                </span>
              </label>
            ))}
            {showAlert && <em className="text-secondary ml-4 text-sm font-bold">All required !</em>}
          </div>
          <button onClick={handleSubmit} className="absolute bottom-0 right-0 hover:bg-tertiary hover:text-primary-light border-2 border-tertiary px-6 py-1 rounded-full font-bold text-sm cursor-pointer transition-colors">SEND</button>
        </form>

        <p className="text-tertiary text-sm self-start mt-6 mb-2">Total Message : {msgData.length}</p>
        <section className="w-full">
          <Swiper
            modules={[Scrollbar, FreeMode]}
            slidesPerView={1.5}
            spaceBetween={15}
            freeMode={true}
            scrollbar={{ draggable: true, hide: true }}
            breakpoints={{
              500: { slidesPerView: 2.5 },
              768: { slidesPerView: 3.5 },
              1025: { slidesPerView: 4.5 }
            }}
            className="w-full h-auto"
          >
            {msgData.map((msg, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-2xl h-full flex flex-col text-white px-3 py-4" style={{ backgroundColor: msg.color }}>
                  <p className="flex gap-2 truncate">
                    <img src="img/icon_user.svg" alt={msg.name} className='size-5' />
                    {msg.name}</p>
                  <hr className="my-3" />
                  <p className="text-sm">{msg.text}</p>
                  <small className="text-right text-sm mt-4">... {msg.date}</small>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </div>
  );
};

export default SectionContact;
