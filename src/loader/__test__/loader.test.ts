import dataLoader from "../loader";
import BlogsServices from "../../services/blogs-service";
import i18n from "../../i18n";

jest.mock('../../services/blogs-service' , () =>({
    getBlogs: jest.fn(),
}))
jest.mock('../../i18n' , () =>({
    language: 'en',
}))

describe('dataLoader', () => {
    afterEach(() =>{
        jest.clearAllMocks();
    })

    test('should call Blogs with correct language and return blogs and language', async () => {
        const mockBlogs = [{ id: 1, title: 'Test Blog' }];
    (BlogsServices.getBlogs as jest.Mock).mockResolvedValue(mockBlogs);

    const result = await dataLoader();
    expect(BlogsServices.getBlogs).toHaveBeenCalledWith('en');
    expect(result).toEqual({ blogs: mockBlogs, language: 'en' });
    })
})