import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { Readable } from 'stream';

export async function GET(req: NextRequest) {
  let filePath = path.join(process.cwd(), 'public', 'landscape-bg.mp4');

  if (!fs.existsSync(filePath)) {
    filePath = path.join(process.cwd(), 'public', 'landscape.mp4');
  }
  if (!fs.existsSync(filePath)) {
    filePath = path.join(process.cwd(), 'public', 'download (1).mp4');
  }

  if (!fs.existsSync(filePath)) {
    return new NextResponse('Video not found', { status: 404 });
  }

  const stat = fs.statSync(filePath);
  const fileSize = stat.size;
  const range = req.headers.get('range');

  if (range) {
    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunksize = end - start + 1;

    const file = fs.createReadStream(filePath, { start, end });
    const headers = new Headers({
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize.toString(),
      'Content-Type': 'video/mp4',
    });

    const webStream = Readable.toWeb(file) as ReadableStream;
    return new NextResponse(webStream, {
      status: 206,
      headers,
    });
  } else {
    const file = fs.createReadStream(filePath);
    const headers = new Headers({
      'Content-Length': fileSize.toString(),
      'Content-Type': 'video/mp4',
      'Accept-Ranges': 'bytes',
    });

    const webStream = Readable.toWeb(file) as ReadableStream;
    return new NextResponse(webStream, {
      status: 200,
      headers,
    });
  }
}
