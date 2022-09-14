import axios from 'axios';

type testimonialSubmission = {
  entity: {
    id: string;
  };
  authorName: string;
  authorEmail: string;
  title: string;
  rating: number;
  content: string;
  reviewLabelNames: string[];
  invitationUid?: string;
};


export const sendTestimonialToFunction = (testimonial: testimonialSubmission) => {
  // Get curent date as YYYY-MM-DD
  // const reviewDate = new Date().toISOString().split('T')[0];

  const data = { ...testimonial};

  console.log('Posting Following Review', data);
  return axios.get ('https://gains-lather-catatonic.pgsdemo.com/serverless/createTestimonial', {
    params: {
      title: testimonial.title,
      author: testimonial.authorName,
      authorEmail: testimonial.authorEmail,
      content: testimonial.content,
      label1: testimonial.reviewLabelNames[0],
      label2: testimonial.reviewLabelNames[1],
      label3: testimonial.reviewLabelNames[2],
      locationId: testimonial.entity.id,
      rating: testimonial.rating
    },
  });
};

export default sendTestimonialToFunction;
