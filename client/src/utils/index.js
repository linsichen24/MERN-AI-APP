import { surpriseMePrompts } from '../constants';

import FileSaver from 'file-saver';

/*
  getRandomPrompt 函数的作用是从 surpriseMePrompts 数组中随机获取一个不同于传入的 prompt 参数的提示字符串。
*/
export function getRandomPrompt(prompt){
  const randomIndex = Math.floor(Math.random() *
  surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if(randomPrompt === prompt) return getRandomPrompt(prompt);
  return randomPrompt;
}

/*
  这个函数使用FileSaver.js库中的saveAs方法将photo保存为download-${_id}.jpg的文件。这个函数可以用来下载给定图片的副本，其中_id是一个用于标识图片的唯一ID。
*/
export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}